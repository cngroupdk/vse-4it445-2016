'use strict';

const fileExtensionRe = new RegExp(/.*(\.\w+)/);

module.exports = function(ContactForm) {

  ContactForm.submit = function(name, email, note, attachment, req, callback) {
    const app = require('../../server/server.js');
    const { container } = app.models;

    const attachmentFileInfo = req.files.find(({ fieldname }) =>
      fieldname === 'attachment');

    ContactForm.create({
      name,
      email,
      note,
    }, function(err, contact) {
      if (err) { return callback(err); }
      if (!attachmentFileInfo) {
        return callback(null, id);
      }

      const { id } = contact;
      const { originalname, buffer } = attachmentFileInfo;

      let extension = '';
      const matches = originalname.match(fileExtensionRe);
      if (matches && matches.length && matches.length > 1) {
        extension = matches[1];
      }

      const attachmentFilename = `${id}${extension}`;

      const writer = container.uploadStream('contact-form-attachments', attachmentFilename);
      writer.write(buffer);
      writer.on('success', () => {
        ContactForm.updateAll({ id }, { attachmentFilename }, () => {
          callback(null, id);
        });
      });
      writer.on('error', (err) => callback(err));
      writer.end();
    });
  };
};

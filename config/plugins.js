module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'cramervincent@gmail.com',
          pass: 'tsqxsxeraaxjyjmw',
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'cramervincent@gmail.com',
        defaultReplyTo: 'cramervincent@gmail.com',
      },
    },
  },
  // ...
});

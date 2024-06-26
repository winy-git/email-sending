const nodemailer = require('nodemailer');
const email = {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1234567",
          pass: "abcdefg"
        }
};

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'winystar@naver.com',
    to: 'winystar@naver.com',
    subject: '테스트 메일입니다.',
    text: 'nodeJS로 이메일을 보내자'
};
send(email_data);
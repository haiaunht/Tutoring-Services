package com.sangandau.tutoring.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.slf4j.Logger;
import lombok.AllArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmailSenderService{

  private final JavaMailSender mailSender;
  private final static Logger LOGGER = LoggerFactory.getLogger(EmailSenderService.class);

  public void sendEmail(
      String toEmail,
      String bodyEmail,
      String subject
      ) {
    try {
      MimeMessage mimeMessage = mailSender.createMimeMessage();
      MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, "utf-8");
      mimeMessageHelper.setText(bodyEmail, true);
      mimeMessageHelper.setTo(toEmail);
      mimeMessageHelper.setSubject(subject);
      mimeMessageHelper.setFrom("astudy7121@gmail.com");
      mailSender.send(mimeMessage);
      System.out.printf("Sent email to %s%n", toEmail);
    } catch (MessagingException e){
      LOGGER.error("failed to send email", e);
      throw new IllegalStateException("failed to send email to " + toEmail);
    }
  }
}

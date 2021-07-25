package com.sangandau.tutoring.services;

import com.sangandau.tutoring.exceptions.EmailAlreadyExistsException;
import com.sangandau.tutoring.models.EmailSubscription;
import com.sangandau.tutoring.repositories.EmailSubscriptionRepository;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class EmailSubscriptionService {

  private final EmailSubscriptionRepository emailSubscriptionRepository;
  private final EmailSenderService emailSenderService;

  public ResponseEntity<Map<String, String>> saveNewEmailSubscription(EmailSubscription newEmail) {
    Map<String, String> message = new HashMap<>();
    if (isPresent(newEmail)) {
//      message.put("message", "Email was already subscribed.");
//      return new ResponseEntity<>(message, HttpStatus.CONFLICT);
        throw new EmailAlreadyExistsException("Email " + newEmail.getEmail() + " was already subscribed.");
    }
    emailSubscriptionRepository.save(newEmail);
    System.out.printf("Email %s is saved into table email_subscription%n", newEmail.getEmail());
    //    Send email with coupon 30% discount

    String coupon = "Astudy-30-Discount";
    String name = "there";
    String text = "Thank you for subscribing. Here is your special 30% discount coupon:";
    String subject = "Thank you for subscribing to AStudy's newsletter";
    emailSenderService.sendEmail(
        newEmail.getEmail(),
        buildEmail(name, text ,coupon),
        subject
    );

    message.put("message", "Successfully subscribed!");
    return new ResponseEntity<>(message, HttpStatus.CREATED);
  }


  private boolean isPresent(EmailSubscription newEmail) {
    return emailSubscriptionRepository.findByEmail(newEmail.getEmail()).isPresent();
  }

  private String buildEmail(String name, String text, String coupon) {
    return
        "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n"
            +
            "\n" +
            "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
            "\n" +
            "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n"
            +
            "    <tbody><tr>\n" +
            "      <td width=\"100%\" height=\"53\" bgcolor=\"#145c51\">\n" +
            "        \n" +
            "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n"
            +
            "          <tbody><tr>\n" +
            "            <td width=\"70\" bgcolor=\"#f6f9f9\" valign=\"middle\">\n" +
            "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n"
            +
            "                  <tbody><tr>\n" +
            "                    <td style=\"padding-left:10px\">\n" +
            "                  \n" +
            "                    </td>\n" +
            "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n"
            +
            "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#145c51;text-decoration:none;vertical-align:top;display:inline-block\">AStudy's Monthly Newsletter</span>\n"
            +
            "                    </td>\n" +
            "                  </tr>\n" +
            "                </tbody></table>\n" +
            "              </a>\n" +
            "            </td>\n" +
            "          </tr>\n" +
            "        </tbody></table>\n" +
            "        \n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody></table>\n" +
            "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n"
            +
            "    <tbody><tr>\n" +
            "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
            "      <td>\n" +
            "        \n" +
            "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n"
            +
            "                  <tbody><tr>\n" +
            "                    <td bgcolor=\"#91a19f\" width=\"100%\" height=\"10\"></td>\n" +
            "                  </tr>\n" +
            "                </tbody></table>\n" +
            "        \n" +
            "      </td>\n" +
            "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
            "    </tr>\n" +
            "  </tbody></table>\n" +
            "\n" +
            "\n" +
            "\n" +
            "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n"
            +
            "    <tbody><tr>\n" +
            "      <td height=\"30\"><br></td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
            "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n"
            +   "<p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi "
            + name
            + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">" + text + "</p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">\n"
            + "<p style=\"color:#145c51\"\">" + coupon + "</p> </p></blockquote><p>See you soon.</p>"
            +
            "        \n" +
            "      </td>\n" +
            "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td height=\"30\"><br></td>\n" +
            "    </tr>\n" +
            "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
            "\n" +
            "</div></div>";
  }
}

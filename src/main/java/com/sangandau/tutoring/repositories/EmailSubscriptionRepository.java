package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.EmailSubscription;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailSubscriptionRepository extends CrudRepository<EmailSubscription, Integer> {

  Optional<EmailSubscription> findByEmail(String email);

}

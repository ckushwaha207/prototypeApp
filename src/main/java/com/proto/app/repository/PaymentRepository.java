package com.proto.app.repository;

import com.proto.app.domain.Payment;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Payment entity.
 */
@SuppressWarnings("unused")
public interface PaymentRepository extends JpaRepository<Payment,Long> {

}

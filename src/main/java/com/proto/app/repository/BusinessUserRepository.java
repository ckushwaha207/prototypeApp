package com.proto.app.repository;

import com.proto.app.domain.BusinessUser;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the BusinessUser entity.
 */
@SuppressWarnings("unused")
public interface BusinessUserRepository extends JpaRepository<BusinessUser,Long> {

}

package com.proto.app.repository;

import com.proto.app.domain.MenuItem;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the MenuItem entity.
 */
@SuppressWarnings("unused")
public interface MenuItemRepository extends JpaRepository<MenuItem,Long> {

}

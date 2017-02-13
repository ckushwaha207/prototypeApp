package com.proto.app.repository;

import com.proto.app.domain.DiningTable;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the DiningTable entity.
 */
@SuppressWarnings("unused")
public interface DiningTableRepository extends JpaRepository<DiningTable,Long> {

}

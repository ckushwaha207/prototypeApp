package com.proto.app.repository.search;

import com.proto.app.domain.BusinessRole;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the BusinessRole entity.
 */
public interface BusinessRoleSearchRepository extends ElasticsearchRepository<BusinessRole, Long> {
}

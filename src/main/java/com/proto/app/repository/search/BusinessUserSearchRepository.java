package com.proto.app.repository.search;

import com.proto.app.domain.BusinessUser;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the BusinessUser entity.
 */
public interface BusinessUserSearchRepository extends ElasticsearchRepository<BusinessUser, Long> {
}

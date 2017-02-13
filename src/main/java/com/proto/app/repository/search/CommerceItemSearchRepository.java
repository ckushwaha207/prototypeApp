package com.proto.app.repository.search;

import com.proto.app.domain.CommerceItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the CommerceItem entity.
 */
public interface CommerceItemSearchRepository extends ElasticsearchRepository<CommerceItem, Long> {
}

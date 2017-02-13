package com.proto.app.repository.search;

import com.proto.app.domain.StoreGroup;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the StoreGroup entity.
 */
public interface StoreGroupSearchRepository extends ElasticsearchRepository<StoreGroup, Long> {
}

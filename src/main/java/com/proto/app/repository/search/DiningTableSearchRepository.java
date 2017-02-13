package com.proto.app.repository.search;

import com.proto.app.domain.DiningTable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the DiningTable entity.
 */
public interface DiningTableSearchRepository extends ElasticsearchRepository<DiningTable, Long> {
}

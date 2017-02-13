package com.proto.app.repository.search;

import com.proto.app.domain.MenuItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the MenuItem entity.
 */
public interface MenuItemSearchRepository extends ElasticsearchRepository<MenuItem, Long> {
}

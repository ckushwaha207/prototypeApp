package com.proto.app.repository.search;

import com.proto.app.domain.Order;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Order entity.
 */
public interface OrderSearchRepository extends ElasticsearchRepository<Order, Long> {
}

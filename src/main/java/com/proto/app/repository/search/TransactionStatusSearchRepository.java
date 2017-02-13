package com.proto.app.repository.search;

import com.proto.app.domain.TransactionStatus;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the TransactionStatus entity.
 */
public interface TransactionStatusSearchRepository extends ElasticsearchRepository<TransactionStatus, Long> {
}

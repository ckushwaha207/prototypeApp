package com.proto.app.repository.search;

import com.proto.app.domain.MenuCategory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the MenuCategory entity.
 */
public interface MenuCategorySearchRepository extends ElasticsearchRepository<MenuCategory, Long> {
}

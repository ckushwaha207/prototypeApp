package com.proto.app.service.mapper;

import com.proto.app.domain.*;
import com.proto.app.service.dto.MenuDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Menu and its DTO MenuDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MenuMapper {

    MenuDTO menuToMenuDTO(Menu menu);

    List<MenuDTO> menusToMenuDTOs(List<Menu> menus);

    @Mapping(target = "categories", ignore = true)
    Menu menuDTOToMenu(MenuDTO menuDTO);

    List<Menu> menuDTOsToMenus(List<MenuDTO> menuDTOs);
}

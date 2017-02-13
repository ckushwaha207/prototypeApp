package com.proto.app.service.mapper;

import com.proto.app.domain.*;
import com.proto.app.service.dto.BusinessRoleDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity BusinessRole and its DTO BusinessRoleDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface BusinessRoleMapper {

    BusinessRoleDTO businessRoleToBusinessRoleDTO(BusinessRole businessRole);

    List<BusinessRoleDTO> businessRolesToBusinessRoleDTOs(List<BusinessRole> businessRoles);

    BusinessRole businessRoleDTOToBusinessRole(BusinessRoleDTO businessRoleDTO);

    List<BusinessRole> businessRoleDTOsToBusinessRoles(List<BusinessRoleDTO> businessRoleDTOs);
}

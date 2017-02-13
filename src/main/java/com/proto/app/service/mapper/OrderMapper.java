package com.proto.app.service.mapper;

import com.proto.app.domain.*;
import com.proto.app.service.dto.OrderDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Order and its DTO OrderDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface OrderMapper {

    OrderDTO orderToOrderDTO(Order order);

    List<OrderDTO> ordersToOrderDTOs(List<Order> orders);

    @Mapping(target = "items", ignore = true)
    @Mapping(target = "payments", ignore = true)
    Order orderDTOToOrder(OrderDTO orderDTO);

    List<Order> orderDTOsToOrders(List<OrderDTO> orderDTOs);
}

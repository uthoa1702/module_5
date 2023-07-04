package com.example.module5.service.impl;

import com.example.module5.model.Orders;
import com.example.module5.model.Product;
import com.example.module5.repository.OrderRepository;
import com.example.module5.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements IOrderService {
@Autowired private OrderRepository orderRepository;
    @Override
    public List<Orders> findAll() {
        return orderRepository.getPage();
    }

    @Override
    public void deleteById(Long id) {
        orderRepository.deleteByIdd(id);
    }

    @Override
    public void save(String date, Double price, Long productId, Integer quantity, Double total) {
        orderRepository.create(date,price,productId,quantity,total);
    }


}

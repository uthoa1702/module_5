package com.example.module5.service;


import com.example.module5.model.Orders;
import com.example.module5.model.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IOrderService {
    List<Orders> findAll();

    void deleteById(Long id);


    void save(Long productId, String date, Double price, Double total, Integer quantity);
}

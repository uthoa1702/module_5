package com.example.module5.service;


import com.example.module5.model.Orders;
import com.example.module5.model.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IOrderService {
    List<Orders> findAll();

    void deleteById(Long id);


    void save(String date, Double price, Long id, Integer quantity, Double total);
}

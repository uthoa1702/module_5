package com.example.module5.service.impl;

import com.example.module5.model.Product;
import com.example.module5.repository.ProductRepository;
import com.example.module5.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.getList();
    }
}

package com.example.module5.controller;

import com.example.module5.model.Orders;
import com.example.module5.model.Product;
import com.example.module5.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @GetMapping("/product")
    public ResponseEntity<List<Product>> getProductList() {
        return new ResponseEntity<>(iProductService.findAll(), HttpStatus.OK);
    }




}

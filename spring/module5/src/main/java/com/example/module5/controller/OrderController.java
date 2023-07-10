package com.example.module5.controller;

import com.example.module5.model.Orders;
import com.example.module5.service.IOrderService;
import com.example.module5.service.IProductService;
import com.example.module5.service.impl.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")

public class OrderController {
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IProductService iProductService;
    @Autowired
    private EmailServiceImpl emailService;

    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getOrderList() {
        return new ResponseEntity<>(iOrderService.findAll(), HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/orders/{id}")
    public void deleteInformation(@PathVariable() Long id) {
        iOrderService.deleteById(id);


    }

    @Transactional
<<<<<<< Updated upstream
    @PostMapping("/orders/create")
    public void createOrder(@RequestBody Orders orders) {
        iOrderService.save(orders.getDate(), orders.getPrice(), orders.getProduct().getId(), orders.getQuantity(), orders.getTotal());
        emailService.sendEmail("uthoa1710@gmail.com", "Purchased new ", "anh iu em lam" + orders.getDate());
=======
    @PostMapping("/create")
    public void createOrder(@RequestBody Orders orders) {
        System.out.println(orders);
        //(Product product, String date, Double price, Double total, Integer quantity)
        iOrderService.save(orders.getProduct().getId(),orders.getDate(), orders.getPrice(),  orders.getTotal(), orders.getQuantity());
>>>>>>> Stashed changes
    }
}

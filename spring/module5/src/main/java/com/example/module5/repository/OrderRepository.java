package com.example.module5.repository;

import com.example.module5.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Long> {

    @Query(value = "SELECT * FROM orders WHERE is_delete = FALSE", nativeQuery = true)
    List<Orders> getPage();


    @Modifying
    @Query(value = "UPDATE orders  SET is_delete = TRUE WHERE id = :id", nativeQuery = true)
    void deleteByIdd(@Param("id") Long id);


    @Modifying
    @Query(value = "INSERT INTO orders (date,price,total,product_id,quantity,is_delete)  VALUES (:date,:price,:total,:productId,:quantity,FALSE)", nativeQuery = true)
    void create(@Param("productId") Long productId, @Param("date") String date, @Param("price") Double price, @Param("total") Double total, @Param("quantity") Integer quantity);


}

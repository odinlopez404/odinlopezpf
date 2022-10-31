/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.odin.port.repository;

import com.odin.port.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Odin L
 */
public interface ProyectoRepository extends JpaRepository<Proyecto, Long>{
    
}

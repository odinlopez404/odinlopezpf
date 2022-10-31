package com.odin.port.controller;

import com.odin.port.exception.ResourceNotFoundException;
import com.odin.port.model.Proyecto;
import com.odin.port.repository.ProyectoRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")


public class ProyectoController {
    @Autowired
	private ProyectoRepository proyectoRepository;
	
	// obtener todas las educaciones
	@GetMapping("/proyectos")
	public List<Proyecto> getAllProyectos(){
		return proyectoRepository.findAll();
	}	
	
	// crear educacion
	@PostMapping("/proyectos")
	public Proyecto createProyecto(@RequestBody Proyecto proyecto) {
		return proyectoRepository.save(proyecto);
	}
	
	// obtener eduacion por id
	@GetMapping("/proyectos/{id}")
	public ResponseEntity<Proyecto> getProyectoById(@PathVariable Long id) {
		Proyecto proyecto = proyectoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El proyecto no existe:" + id));
		return ResponseEntity.ok(proyecto);
	}
	
	// actualizar educacion por id
	@PutMapping("/proyectos/{id}")
	public ResponseEntity<Proyecto> updateProyecto(@PathVariable Long id, @RequestBody Proyecto proyectoDetails){
		Proyecto proyecto = proyectoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe un proyecto con el id :" + id));
		
		
                proyecto.setTituloPro(proyectoDetails.getTituloPro());
                proyecto.setImagenPro(proyectoDetails.getImagenPro());
                proyecto.setDescripcionPro(proyectoDetails.getDescripcionPro());     
                    
                
		Proyecto updatedProyecto = proyectoRepository.save(proyecto);
		return ResponseEntity.ok(updatedProyecto);
                
                
	}
	
	// borrar educacion
	@DeleteMapping("/proyectos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProyecto(@PathVariable Long id){
		Proyecto proyecto = proyectoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el id del proyecto :" + id));
		
		proyectoRepository.delete(proyecto);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
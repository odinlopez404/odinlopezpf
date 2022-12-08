package com.odin.port.controller;

import com.odin.port.exception.ResourceNotFoundException;
import com.odin.port.model.Education;
import com.odin.port.repository.EducationRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

public class EducationController {
@Autowired
	private EducationRepository educationRepository;
	
	// obtener todas las educaciones
	@GetMapping("/educaciones")
	public List<Education> getAllEducations(){
		return educationRepository.findAll();
	}	
	
	// crear educacion
        @PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/educaciones")
	public Education createEducation(@RequestBody Education education) {
		return educationRepository.save(education);
	}
	
	// obtener eduacion por id
	@GetMapping("/educaciones/{id}")
	public ResponseEntity<Education> getEducationById(@PathVariable Long id) {
		Education education = educationRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La educacion no existe:" + id));
		return ResponseEntity.ok(education);
	}
	
	// actualizar educacion por id
        @PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/educaciones/{id}")
	public ResponseEntity<Education> updateEducation(@PathVariable Long id, @RequestBody Education educationDetails){
		Education education = educationRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe educacion con el id :" + id));
		
		education.setTituloEdu(educationDetails.getTituloEdu());
                education.setCargoEdu(educationDetails.getCargoEdu());
                education.setDescripcionEdu(educationDetails.getDescripcionEdu());
		education.setFechaDesdeEdu(educationDetails.getFechaDesdeEdu());
   		education.setFechaHastaEdu(educationDetails.getFechaHastaEdu());
                
		Education updatedEducation = educationRepository.save(education);
		return ResponseEntity.ok(updatedEducation);
                
                
	}
	
	// borrar educacion
        @PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/educaciones/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEducation(@PathVariable Long id){
		Education education = educationRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el id de educacion :" + id));
		
		educationRepository.delete(education);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

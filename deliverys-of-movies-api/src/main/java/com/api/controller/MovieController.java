package com.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import com.api.model.MovieModel;
import com.api.service.MovieService;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/movie")
public class MovieController {
	
	@Autowired
	@Qualifier("serviceMovie")
	MovieService movieService;

	@GetMapping
	@ResponseBody
	public List<MovieModel> getListMovies(){
		return movieService.all();
	}

	@GetMapping(path = "/{id}")
	@ResponseBody
	public MovieModel getMovie(@PathVariable(value = "id") long id){
		return movieService.getMovie(id);
	}
}

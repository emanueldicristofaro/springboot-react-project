package com.api.model;

import com.api.entity.Movie;

public class MovieModel {
	
	private int id;
	
	private String name;
	
	private String description;
	
	private Float average;
	
	private String path;
	
	public MovieModel() {}
	
	public MovieModel(Movie movie) {
		
		this.id = movie.getId();
		this.name = movie.getName();
		this.description = movie.getDescription();
		this.average = movie.getAverage();
		this.path = movie.getPath();
		
	}

	public MovieModel(int id, String name, String description, Float average, String path) {

		this.id = id;
		this.name = name;
		this.description = description;
		this.average = average;
		this.path = path;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Float getAverage() {
		return average;
	}

	public void setAverage(Float average) {
		this.average = average;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}	
	
}

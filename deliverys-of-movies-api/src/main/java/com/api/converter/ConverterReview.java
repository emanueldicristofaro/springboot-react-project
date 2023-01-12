package com.api.converter;

import com.api.entity.Review;
import com.api.model.ReviewModel;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("converterReview")
public class ConverterReview {

    public List<ReviewModel> convertList(List<Review> reviewList){

        List<ReviewModel> reviewModelList = new ArrayList<>();

        for(Review rew: reviewList){

            reviewModelList.add(new ReviewModel(rew));
        }

        return reviewModelList;
    }
}

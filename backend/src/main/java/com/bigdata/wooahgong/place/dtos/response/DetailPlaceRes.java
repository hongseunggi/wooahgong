package com.bigdata.wooahgong.place.dtos.response;


import com.bigdata.wooahgong.place.dtos.request.CustomFeedDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class DetailPlaceRes {
    private final String name;
    private final String address;
    private final Double avgRatings;
    private final Double latitude;
    private final Double longitude;
    private final String placeImageUrl;
    private final List<CustomFeedDto> feeds;
    private final Boolean isWished;

    @Builder
    public DetailPlaceRes(String name, String address, Double avgRatings, Double latitude, Double longitude, String placeImageUrl, List<CustomFeedDto> feeds, Boolean isWished) {
        this.name = name;
        this.address = address;
        this.avgRatings = avgRatings;
        this.latitude = latitude;
        this.longitude = longitude;
        this.placeImageUrl = placeImageUrl;
        this.feeds = feeds;
        this.isWished = isWished;
    }
}

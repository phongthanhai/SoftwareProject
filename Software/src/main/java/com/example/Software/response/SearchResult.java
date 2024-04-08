package com.example.Software.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchResult<T> {
    private long total;
    private T data;

    public SearchResult(T data) {
        this.data = data;
    }
}

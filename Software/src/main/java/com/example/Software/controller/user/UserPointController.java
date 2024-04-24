package com.example.Software.controller.user;

import com.example.Software.action.PointContainer;
import com.example.Software.model.Point;
import com.example.Software.service.user.UserPointService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.PriorityQueue;

@RestController
@RequestMapping("/point")
@AllArgsConstructor
public class UserPointController {
    private  UserPointService userPointService;

    @GetMapping
    public List<Point> getUserPoints() {
        return PointContainer.getAllPoints();
    }

//    @PutMapping
//    public void updateUserPoints(@RequestBody Point point) {
//        PointContainer.updatePoint(point, userPointService);
//    }

    @PostMapping
    public void addUserPoint(@RequestBody Point point) {
        userPointService.insertUserPoint(point);
    }

    @PostMapping("/{id}")
    public void increaseUserPoint(@PathVariable String id, @RequestParam int pointUpdate) {
        updateDB(id, pointUpdate);
        PointContainer.updatePoint(id, pointUpdate);
    }

    public synchronized void updateDB(String pointId, int pointUpdate) {
        userPointService.updateUserPoint(pointId, pointUpdate);
    }
}

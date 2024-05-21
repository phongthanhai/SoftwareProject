package com.example.Software.service.user;

import com.example.Software.model.Point;
import com.example.Software.repository.user.UserPointRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserPointService {
    private UserPointRepository userPointRepository;

    public void insertUserPoint(Point point) {
        userPointRepository.save(point);
    }

    public Point getUserPoint(String id) {
        return userPointRepository.findById(id).orElse(null);
    }

    public void updateUserPoint(Point point) {
        userPointRepository.save(point);
    }

    public void deleteUserPoint(String id) {
        userPointRepository.deleteById(id);
    }

    public List<Point> getAllUserPoints() {
        return userPointRepository.findAll();
    }

    public void updateUserPoint(String id, int pointUpdate) {
        userPointRepository.increasePoints(id, pointUpdate);
    }
}

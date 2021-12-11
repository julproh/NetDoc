package com.NetDoc.controller;

import com.NetDoc.entity.ProfileInfoEntity;
import com.NetDoc.repos.ProfileInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ProfileController {

    @Autowired
    private ProfileInfoRepository profileInfoRepository;

    @CrossOrigin
    @GetMapping("/profile")
    public Optional<ProfileInfoEntity> getProfileInfoEntities(Long id) {
        long _id = 1;
        return profileInfoRepository.findById(_id);
    }


    @CrossOrigin
    @PostMapping("/profile")
    public void postProfileInfoEntities(@RequestParam String name, @RequestParam String surname, @RequestParam String password, @RequestParam String email, @RequestParam String number, @RequestParam String gender, @RequestParam String birthday, @RequestParam String country) {
        ProfileInfoEntity profileInfoEntity = new ProfileInfoEntity(name, surname,password, email, number, gender, birthday, country);
        profileInfoRepository.save(profileInfoEntity);
    }


}

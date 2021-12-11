package com.NetDoc.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProfileInfoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name="Name", surname="Surname", password="Password", gender="Gender", birthday="Birthday", country="Country", number="Number", email="Email";

    public Long getId() { return id;}

    public void setId(Long id) { this.id = id;}

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getSurname() { return surname; }

    public void setSurname(String surname) { this.surname = surname; }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }


    public String getNumber() { return number; }

    public void setNumber(String number) { this.number = number; }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public ProfileInfoEntity() {}

    public ProfileInfoEntity(String name, String surname, String password, String number,  String email, String gender, String country, String birthday) {
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.email = email;
        this.number = number;
        this.gender = gender;
        this.birthday = birthday;
        this.country = country;
    }

}

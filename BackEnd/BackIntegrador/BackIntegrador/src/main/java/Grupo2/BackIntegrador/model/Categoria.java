package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="CATEGORIA")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String category;
    @Column
    private String name;
    @Column
    private String image;
    @Column
    private int price;
    @Column
    private String model;
    @Column
    private String messagge;
    @Column
    private String gearbox;
    @Column
    private String trunk;
    @Column
    private int doors;
    @Column
    private boolean airConditioning;
    @Column
    private boolean ABSBreak;
    @Column
    private String fuel;


    public Categoria() {
    }

    public Categoria(Long id, String category, String name, String image, int price, String model, String messagge, String gearbox, String trunk, int doors, boolean airConditioning, boolean ABSBreak, String fuel) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.image = image;
        this.price = price;
        this.model = model;
        this.messagge = messagge;
        this.gearbox = gearbox;
        this.trunk = trunk;
        this.doors = doors;
        this.airConditioning = airConditioning;
        this.ABSBreak = ABSBreak;
        this.fuel = fuel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getMessagge() {
        return messagge;
    }

    public void setMessagge(String messagge) {
        this.messagge = messagge;
    }

    public String getGearbox() {
        return gearbox;
    }

    public void setGearbox(String gearbox) {
        this.gearbox = gearbox;
    }

    public String getTrunk() {
        return trunk;
    }

    public void setTrunk(String trunk) {
        this.trunk = trunk;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }

    public boolean isAirConditioning() {
        return airConditioning;
    }

    public void setAirConditioning(boolean airConditioning) {
        this.airConditioning = airConditioning;
    }

    public boolean isABSBreak() {
        return ABSBreak;
    }

    public void setABSBreak(boolean ABSBreak) {
        this.ABSBreak = ABSBreak;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }
}

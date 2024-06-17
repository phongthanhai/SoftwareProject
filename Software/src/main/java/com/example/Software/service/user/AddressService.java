package com.example.Software.service.user;

import com.example.Software.model.Address;
import com.example.Software.repository.user.AddressRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AddressService {
    private final AddressRepository addressRepository;

    public void addNewAddress(Address address) {
        addressRepository.insert(address);
    }

    public void updateAddress(Address address) {
        addressRepository.save(address);
    }

    public List<Address> getAddressByUserEmail(String userEmail) {
        return addressRepository.findByUserEmail(userEmail);
    }

    public void removeAddress(String addressId) {
        addressRepository.deleteById(addressId);
    }

    public Address getAddress(String addressId) {
        return addressRepository.findById(addressId).orElse(new Address());
    }
}

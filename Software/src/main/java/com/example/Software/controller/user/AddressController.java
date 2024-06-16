package com.example.Software.controller.user;

import com.example.Software.model.Address;
import com.example.Software.request.user.CreateAddressRequest;
import com.example.Software.response.user.AddressDTO;
import com.example.Software.service.user.AddressService;
import com.example.Software.service.user.AuthService;
import com.example.Software.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/address")
public class AddressController {
    private final UserService userService;
    private final AuthService authService;
    private final AddressService addressService;

    @GetMapping
    public List<AddressDTO> getListAddress() {
        String userEmail = authService.getUserEmail();
        List<Address> addresses = addressService.getAddressByUserEmail(userEmail);
        return AddressDTO.from(addresses);
    }

    @DeleteMapping
    public void removeAddress(@RequestParam String addressId) {
        addressService.removeAddress(addressId);
    }

    @PostMapping
    public void createAddress(@RequestBody CreateAddressRequest request) {
        String userEmail = authService.getUserEmail();
        request.setEmail(userEmail);
        List<Address> addresses = addressService.getAddressByUserEmail(userEmail);
        if (addresses.isEmpty()) {
            request.setType(1);
        }
        addressService.addNewAddress(CreateAddressRequest.toAddress(request));
    }

    @PutMapping
    public void updateAddress(@RequestBody Address request) {
        addressService.updateAddress(request);
    }

    @GetMapping("/{addressId}")
    public Address getAddressDetail(@PathVariable String addressId) {
        return addressService.getAddress(addressId);
    }
}

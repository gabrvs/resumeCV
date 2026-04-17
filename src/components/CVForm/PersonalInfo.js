"use client";

import { User, Mail, Phone, Camera } from "lucide-react";
import { useCVStore } from "@/store/useCVStore";
import { validateEmail, validatePhone } from "@/utils/validation";
import { useState } from "react";
import FormSection from "./FormSection";

export default function PersonalInfo() {
  const { personal, setPersonal, setPhoto } = useCVStore();
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setPersonal(field, value);

    if (field === "email") {
      const result = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: result.valid ? "" : result.message }));
    }
    if (field === "phone") {
      const result = validatePhone(value);
      setErrors((prev) => ({ ...prev, phone: result.valid ? "" : result.message }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const inputClass =
    "w-full bg-surface-light/50 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder-muted-dark focus-ring transition-colors focus:border-accent";

  return (
    <FormSection title="Dane osobowe" icon={User}>
      {/* Photo upload */}
      <div className="flex items-center gap-4 mb-2">
        <div className="relative group">
          <div className="w-20 h-20 rounded-full bg-surface-light border-2 border-border overflow-hidden flex items-center justify-center">
            {personal.photo ? (
              <img
                src={personal.photo}
                alt="Zdjęcie profilowe"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-muted-dark" />
            )}
          </div>
          <label
            htmlFor="photo-upload"
            className="absolute inset-0 rounded-full cursor-pointer bg-accent/0 group-hover:bg-accent/20 flex items-center justify-center transition-colors"
          >
            <span className="sr-only">Dodaj zdjęcie</span>
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>
        <div className="text-sm text-muted">
          <p className="font-medium text-foreground">Zdjęcie profilowe</p>
          <p>Kliknij aby dodać zdjęcie</p>
        </div>
      </div>

      {/* Name fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-muted mb-1.5">
            Imię
          </label>
          <input
            id="firstName"
            type="text"
            value={personal.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Jan"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-muted mb-1.5">
            Nazwisko
          </label>
          <input
            id="lastName"
            type="text"
            value={personal.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Kowalski"
            className={inputClass}
          />
        </div>
      </div>

      {/* Contact fields */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">
          <Mail className="w-4 h-4 inline mr-1.5" />
          Adres e-mail
        </label>
        <input
          id="email"
          type="email"
          value={personal.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="jan.kowalski@email.com"
          className={`${inputClass} ${errors.email ? "border-danger" : ""}`}
        />
        {errors.email && (
          <p className="text-danger text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-muted mb-1.5">
          <Phone className="w-4 h-4 inline mr-1.5" />
          Numer telefonu
        </label>
        <input
          id="phone"
          type="tel"
          value={personal.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+48 123 456 789"
          className={`${inputClass} ${errors.phone ? "border-danger" : ""}`}
        />
        {errors.phone && (
          <p className="text-danger text-xs mt-1">{errors.phone}</p>
        )}
      </div>
    </FormSection>
  );
}

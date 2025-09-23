"use client";

import { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Background,
  Column,
  Textarea,
} from "@/once-ui/components";
import { effects } from "@/app/resources";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type ContactProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export const ContactForm = ({ newsletter }: { newsletter: ContactProps }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [K in keyof FormData]?: boolean }>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Please enter a valid email address";
        return "";
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.length < 5) return "Subject must be at least 5 characters";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const debouncedHandleChange = debounce(
    (field: keyof FormData, value: string) => handleChange(field, value),
    300
  );

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      const mailtoLink = `mailto:contact@ryder.pro?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Mark as submitted after a short delay
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Column
        overflow="hidden"
        position="relative"
        fillWidth
        padding="xl"
        radius="l"
        marginBottom="m"
        horizontal="center"
        align="center"
        background="surface"
        border="neutral-medium"
      >
        <Background
          gradient={{
            display: true,
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            tilt: -45,
            colorStart: "accent-background-strong",
            colorEnd: "static-transparent",
            opacity: 60,
          }}
          dots={{
            display: true,
            size: "m" as any,
            color: "accent-on-background-weak",
            opacity: 50,
          }}
        />
        <Heading
          style={{ position: "relative", color: "#10b981" }}
          marginBottom="s"
          variant="display-strong-xs"
        >
          ✨ Thank you for reaching out!
        </Heading>
        <Text
          style={{
            position: "relative",
            maxWidth: "var(--responsive-width-xs)",
          }}
          wrap="balance"
          marginBottom="m"
          onBackground="neutral-medium"
        >
          Your email client should have opened with a pre-filled message. If
          not, please send an email to <strong>contact@ryder.pro</strong>
        </Text>
        <Button
          variant="tertiary"
          size="s"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTouched({});
            setErrors({});
          }}
        >
          Send Another Message
        </Button>
      </Column>
    );
  }

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: effects.mask.cursor,
          x: effects.mask.x,
          y: effects.mask.y,
          radius: effects.mask.radius,
        }}
        gradient={{
          display: effects.gradient.display,
          x: effects.gradient.x,
          y: effects.gradient.y,
          width: effects.gradient.width,
          height: effects.gradient.height,
          tilt: effects.gradient.tilt,
          colorStart: effects.gradient.colorStart,
          colorEnd: effects.gradient.colorEnd,
          opacity: effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: effects.dots.display,
          size: effects.dots.size as any,
          color: effects.dots.color,
          opacity: effects.dots.opacity as any,
        }}
        grid={{
          display: effects.grid.display,
          color: effects.grid.color,
          width: effects.grid.width as any,
          height: effects.grid.height as any,
          opacity: effects.grid.opacity as any,
        }}
        lines={{
          display: effects.lines.display,
          opacity: effects.lines.opacity as any,
        }}
      />

      <Heading
        style={{ position: "relative" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {newsletter.title}
      </Heading>

      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>

      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <Flex fillWidth maxWidth={24} gap="8" mobileDirection="column">
          <Flex flex={1}>
            <Input
              style={{ width: "100%" }}
              labelAsPlaceholder
              id="contact-name"
              name="name"
              type="text"
              label="Your Name"
              required
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value;
                setFormData((prev) => ({ ...prev, name: value }));
                if (errors.name) {
                  handleChange("name", value);
                } else {
                  debouncedHandleChange("name", value);
                }
              }}
              onBlur={() => handleBlur("name")}
              errorMessage={touched.name ? errors.name : ""}
            />
          </Flex>

          <Flex flex={1}>
            <Input
              style={{ width: "100%" }}
              labelAsPlaceholder
              id="contact-email"
              name="email"
              type="email"
              label="Email Address"
              required
              value={formData.email}
              onChange={(e) => {
                const value = e.target.value;
                setFormData((prev) => ({ ...prev, email: value }));
                if (errors.email) {
                  handleChange("email", value);
                } else {
                  debouncedHandleChange("email", value);
                }
              }}
              onBlur={() => handleBlur("email")}
              errorMessage={touched.email ? errors.email : ""}
            />
          </Flex>
        </Flex>

        <Flex fillWidth maxWidth={24}>
          <Input
            style={{ width: "100%" }}
            labelAsPlaceholder
            id="contact-subject"
            name="subject"
            type="text"
            label="Subject"
            required
            value={formData.subject}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prev) => ({ ...prev, subject: value }));
              if (errors.subject) {
                handleChange("subject", value);
              } else {
                debouncedHandleChange("subject", value);
              }
            }}
            onBlur={() => handleBlur("subject")}
            errorMessage={touched.subject ? errors.subject : ""}
          />
        </Flex>

        <Flex fillWidth maxWidth={24}>
          <Textarea
            style={{ width: "100%" }}
            labelAsPlaceholder
            id="contact-message"
            name="message"
            label="Your Message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prev) => ({ ...prev, message: value }));
              if (errors.message) {
                handleChange("message", value);
              } else {
                debouncedHandleChange("message", value);
              }
            }}
            onBlur={() => handleBlur("message")}
            errorMessage={touched.message ? errors.message : ""}
          />
        </Flex>

        <Flex fillWidth maxWidth={24} horizontal="center" paddingTop="m">
          <Button
            type="submit"
            size="m"
            variant="primary"
            loading={isSubmitting}
            fillWidth
            arrowIcon
          >
            {isSubmitting ? "Opening Email Client..." : "Send Message"}
          </Button>
        </Flex>
      </form>
    </Column>
  );
};

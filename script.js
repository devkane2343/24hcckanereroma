// Dropdown menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.querySelector(".dropdown-menu")
    const menuToggle = document.querySelector(".menu-toggle")
    const header = document.querySelector(".header")
  
    // Dropdown menu toggle functionality
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()
      dropdownMenu.classList.toggle("active")
      console.log("Dropdown menu toggled")
    })
    
    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("active")
      }
    })
    
    // Close dropdown when clicking on dropdown items
    const dropdownItems = document.querySelectorAll(".dropdown-item")
    dropdownItems.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault()
        dropdownMenu.classList.remove("active")
        console.log("Dropdown item clicked:", this.textContent)
      })
    })
  
    // Smooth scroll for CTA button
    const ctaButton = document.querySelector(".cta-button")
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault()
      // Add scroll to products section or form
      console.log("CTA button clicked")
  
      // Add a subtle animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  
    // Get Started button functionality
    const getStartedBtn = document.querySelector(".get-started-btn")
    getStartedBtn.addEventListener("click", function (e) {
      e.preventDefault()
      console.log("Get Started clicked")
  
      // Add animation
      this.style.transform = "translateY(-1px) scale(0.98)"
      setTimeout(() => {
        this.style.transform = "translateY(-1px) scale(1)"
      }, 150)
    })
  
    // Cart button functionality
    const cartBtn = document.querySelector(".cart-btn")
    cartBtn.addEventListener("click", function (e) {
      e.preventDefault()
      console.log("Cart clicked")
  
      // Add cart animation
      const cartCount = this.querySelector(".cart-count")
      cartCount.style.transform = "scale(1.2)"
      setTimeout(() => {
        cartCount.style.transform = "scale(1)"
      }, 200)
    })
  
    // Parallax effect for products image
    const productsImage = document.querySelector(".products-image")
  
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
  
      if (productsImage) {
        productsImage.style.transform = `translateY(${rate}px)`
      }
    })
  
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("button, .logo")
  
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.3s ease"
      })
  
      element.addEventListener("mouseleave", function () {
        this.style.transition = "all 0.3s ease"
      })
    })
  
    // Testimonial animation on scroll
    const testimonial = document.querySelector(".testimonial")
  
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px",
    }
  
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    if (testimonial) {
      testimonial.style.opacity = "0"
      testimonial.style.transform = "translateY(20px)"
      testimonial.style.transition = "all 0.6s ease"
      testimonialObserver.observe(testimonial)
    }
  
    // Add loading animation
    window.addEventListener("load", () => {
      document.body.style.opacity = "0"
      document.body.style.transition = "opacity 0.5s ease"
  
      setTimeout(() => {
        document.body.style.opacity = "1"
      }, 100)
    })
  })
  
  // Add some interactive features
  class D1Website {
    constructor() {
      this.init()
    }
  
    init() {
      this.setupAnimations()
      this.setupInteractions()
    }
  
    setupAnimations() {
      // Stagger animation for hero elements
      const heroElements = [".hero-title", ".hero-subtitle", ".cta-button", ".testimonial"]
  
      heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector)
        if (element) {
          element.style.opacity = "0"
          element.style.transform = "translateY(30px)"
          element.style.transition = `all 0.8s ease ${index * 0.2}s`
  
          setTimeout(
            () => {
              element.style.opacity = "1"
              element.style.transform = "translateY(0)"
            },
            500 + index * 200,
          )
        }
      })
    }
  
    setupInteractions() {
      // Add ripple effect to buttons
      const buttons = document.querySelectorAll("button")
  
      buttons.forEach((button) => {
        button.addEventListener("click", this.createRipple)
      })
    }
  
    createRipple(e) {
      const button = e.currentTarget
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
  
      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")
  
      button.appendChild(ripple)
  
      setTimeout(() => {
        ripple.remove()
      }, 600)
    }
  }
  
  // Initialize the website
  new D1Website()
  
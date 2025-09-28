// Enhanced website functionality with animations and mobile responsiveness
document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.querySelector(".dropdown-menu")
    const menuToggle = document.querySelector(".menu-toggle")
    const header = document.querySelector(".header")
  
    // Header scroll effect
    let lastScrollY = window.scrollY
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
      
      lastScrollY = currentScrollY
    })
  
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
      console.log("CTA button clicked")

      // Subtle tap animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)

      // Smoothly scroll to Section 7
      const targetSection = document.querySelector('.section-7')
      if (targetSection && typeof targetSection.scrollIntoView === 'function') {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (targetSection) {
        // Fallback for very old browsers
        window.scrollTo({ top: targetSection.offsetTop, left: 0, behavior: 'smooth' })
      }
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
    const cartModal = document.getElementById("cartModal")
    const cartModalClose = document.querySelector(".cart-modal-close")
    
    cartBtn.addEventListener("click", function (e) {
      e.preventDefault()
      console.log("Cart clicked")
      
      // Open cart modal
      cartModal.classList.add("show")
      document.body.style.overflow = "hidden" // Prevent background scrolling
      
      // Add cart animation
      const cartCount = this.querySelector(".cart-count")
      if (cartCount) {
        cartCount.style.transform = "scale(1.2)"
        setTimeout(() => {
          cartCount.style.transform = "scale(1)"
        }, 200)
      }
    })
    
    // Close modal functionality
    function closeCartModal() {
      cartModal.classList.remove("show")
      document.body.style.overflow = "auto" // Restore scrolling
    }
    
    // Close modal when clicking close button
    cartModalClose.addEventListener("click", closeCartModal)
    
    // Close modal when clicking outside the modal content
    cartModal.addEventListener("click", function (e) {
      if (e.target === cartModal) {
        closeCartModal()
      }
    })
    
    // Close modal when pressing Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && cartModal.classList.contains("show")) {
        closeCartModal()
      }
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
  
    // Enhanced scroll animations with intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)
  
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll("section")
    sections.forEach(section => {
      section.classList.add("fade-in")
      scrollObserver.observe(section)
    })
  
    // Observe cards and feature items
    const cards = document.querySelectorAll(".benefit-card, .feature-item, .step, .ingredient, .fan-card")
    cards.forEach((card, index) => {
      card.classList.add("fade-in")
      card.style.animationDelay = `${index * 0.1}s`
      scrollObserver.observe(card)
    })
  
    // Testimonial animation on scroll
    const testimonial = document.querySelector(".testimonial")
  
    if (testimonial) {
      testimonial.style.opacity = "0"
      testimonial.style.transform = "translateY(20px)"
      testimonial.style.transition = "all 0.6s ease"
      scrollObserver.observe(testimonial)
    }
  
    // Enhanced loading animations and image lazy loading
    window.addEventListener("load", () => {
      // Hide page loading screen
      const pageLoading = document.querySelector('.page-loading')
      if (pageLoading) {
        pageLoading.classList.add('hidden')
        setTimeout(() => {
          pageLoading.remove()
        }, 500)
      }
      
      // Fade in body
      document.body.style.opacity = "0"
      document.body.style.transition = "opacity 0.5s ease"
  
      setTimeout(() => {
        document.body.style.opacity = "1"
      }, 100)
    })
    
    // Image lazy loading with loading states
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.classList.add('loading')
      
      img.addEventListener('load', () => {
        img.classList.remove('loading')
        img.classList.add('loaded')
      })
      
      img.addEventListener('error', () => {
        img.classList.remove('loading')
        img.style.opacity = '0.5'
      })
    })
    
    // Add skeleton loading for dynamic content
    function addSkeletonLoading(element, type = 'text') {
      const skeleton = document.createElement('div')
      skeleton.className = `skeleton skeleton-${type}`
      element.appendChild(skeleton)
      
      return skeleton
    }
    
    // Remove skeleton loading
    function removeSkeletonLoading(skeleton) {
      if (skeleton && skeleton.parentNode) {
        skeleton.parentNode.removeChild(skeleton)
      }
    }
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

  // Cart functionality
  class CartManager {
    constructor() {
      this.cart = []
      this.init()
    }

    init() {
      this.setupAddToCartButtons()
      this.updateCartCount()
    }

    setupAddToCartButtons() {
      // Get all ADD TO CART buttons
      const addToCartButtons = document.querySelectorAll('.cta-btn, .btn-add, .cta')
      
      addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault()
          this.addToCart(button)
        })
      })
    }

    addToCart(button) {
      // Extract product information based on button context
      const productInfo = this.extractProductInfo(button)
      
      // Add item to cart
      this.cart.push(productInfo)
      
      // Update cart display
      this.updateCartDisplay()
      
      // Update cart count
      this.updateCartCount()
      
      // Add visual feedback to button
      this.addButtonFeedback(button)
      
      console.log('Item added to cart:', productInfo)
    }

    extractProductInfo(button) {
      // Find the closest parent with product information
      const card = button.closest('.fan-card') || button.closest('.set-info') || button.closest('.section-13__copy')
      
      if (card) {
        const productName = this.findProductName(card)
        const price = this.findPrice(card, button)
        const image = this.findProductImage(card)
        
        return {
          id: Date.now() + Math.random(), // Simple unique ID
          name: productName,
          price: price,
          image: image,
          quantity: 1
        }
      }
      
      // Fallback product info
      return {
        id: Date.now() + Math.random(),
        name: "D1 Skincare Set",
        price: 58.99,
        image: "assets/Group 26.png",
        quantity: 1
      }
    }

    findProductName(card) {
      const nameElement = card.querySelector('.product-name') || 
                         card.querySelector('h2') || 
                         card.querySelector('h3')
      return nameElement ? nameElement.textContent.trim() : "D1 Skincare Product"
    }

    findPrice(card, button) {
      const priceElement = card.querySelector('.price') || 
                          card.querySelector('.old-price') ||
                          button
      
      if (priceElement) {
        const priceText = priceElement.textContent
        const priceMatch = priceText.match(/\$(\d+\.?\d*)/)
        return priceMatch ? parseFloat(priceMatch[1]) : 58.99
      }
      
      return 58.99
    }

    findProductImage(card) {
      const imgElement = card.querySelector('img')
      return imgElement ? imgElement.src : "assets/Group 26.png"
    }


    addButtonFeedback(button) {
      // Add visual feedback
      const originalText = button.textContent
      button.textContent = 'ADDED!'
      button.style.backgroundColor = '#4CAF50'
      
      setTimeout(() => {
        button.textContent = originalText
        button.style.backgroundColor = ''
      }, 2000)
    }

    updateCartDisplay() {
      const cartModal = document.getElementById('cartModal')
      const cartBody = cartModal.querySelector('.cart-modal-body')
      const cartEmpty = cartModal.querySelector('.cart-empty')
      const checkoutBtn = cartModal.querySelector('.cart-checkout-btn')
      
      if (this.cart.length === 0) {
        cartEmpty.style.display = 'block'
        checkoutBtn.disabled = true
      } else {
        cartEmpty.style.display = 'none'
        checkoutBtn.disabled = false
        
        // Update cart items display
        cartBody.innerHTML = `
          <div class="cart-items">
            ${this.cart.map(item => `
              <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                  <h4>${item.name}</h4>
                  <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                  <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', 1)">+</button>
                    <button class="remove-btn" onclick="cartManager.removeItem('${item.id}')">Remove</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="cart-total">
            <strong>Total: $${this.getCartTotal().toFixed(2)}</strong>
          </div>
        `
      }
    }

    updateQuantity(itemId, change) {
      const item = this.cart.find(item => item.id == itemId)
      if (item) {
        item.quantity += change
        if (item.quantity <= 0) {
          this.removeItem(itemId)
        } else {
          this.updateCartDisplay()
          this.updateCartCount()
        }
      }
    }

    removeItem(itemId) {
      this.cart = this.cart.filter(item => item.id != itemId)
      this.updateCartDisplay()
      this.updateCartCount()
    }

    updateCartCount() {
      const cartCountElement = document.querySelector('.cart-count')
      if (cartCountElement) {
        const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0)
        
        if (totalItems > 0) {
          cartCountElement.textContent = totalItems
          cartCountElement.classList.add('show')
          
          // Add pulse animation when count changes
          cartCountElement.classList.add('animate')
          setTimeout(() => {
            cartCountElement.classList.remove('animate')
          }, 300)
        } else {
          cartCountElement.classList.remove('show')
        }
      }
    }

    getCartTotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  }

  // Initialize cart manager
  const cartManager = new CartManager()
  
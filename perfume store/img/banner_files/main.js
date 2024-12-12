const check = () => {
                        if (!("serviceWorker" in navigator)) {
                          throw new Error("No Service Worker support!")
                        }
                        if (!("PushManager" in window)) {
                          throw new Error("No Push API Support!")
                        }
                      }
                      const registerServiceWorker = async () => {
                        const swRegistration = await navigator.serviceWorker.register("/a/pqe/61685924025/sw.js");
                        return swRegistration;
                      }

                      const requestNotificationPermission = async () => {
                          const permission = await window.Notification.requestPermission();
                          if(permission !== "granted"){
                          }
                      }
                      const main = async () => {
                          check();
                          const swRegistration = await registerServiceWorker();
                      }
                    main(); 
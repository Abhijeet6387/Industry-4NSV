const bcrypt=require('bcrypt');

const Event=require('../models/event_model');
const Component= require('../models/component_model');
const HardwareDesign= require('../models/hardware_design_model');
const HardwareMes= require('../models/hardware_MES_model');
const SoftwareDesign=require('../models/software_design_model');
const SoftwareMes=require('../models/software_MES_model');
const User=require('../models/user_model');
const Member= require('../models/member_model');
const AdminBro = require('admin-bro')

const AdminBroExpressjs = require('admin-bro-expressjs');
const meeting_model = require('../models/meeting_model');
const budget_model = require('../models/budget_model');
const update_model = require('../models/update_model');
const employee_model = require('../models/employee_model');


AdminBro.registerAdapter(require('admin-bro-mongoose'))

const adminBro = new AdminBro({
    resources: [{
        resource: User,
        options: {
          properties: {
            encryptedPassword: {
              isVisible: false,
            },
            password: {
              type: 'string',
              
              isVisible: {
                list: false, edit: true, filter: false, show: false,
              },
            },
          },
          actions: {
            new: {
              before: async (request) => {
               console.log(request.payload.password)
               if(request.payload.password){
                  request.payload = {
                    ...request.payload,
                    encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                    password: undefined,
                    
                  }
                }
                console.log(request.payload.record);
                return request
              },
            }
          }
        }
      },
      {
        resource: Event,
        options: {
          // We'll add this later
        }
      },
      {
        resource: Component,
        options: {
          // We'll add this later
        }
      },
      {
        resource: HardwareDesign,
        options: {
          // We'll add this later
        }
      },
      {
        resource: HardwareMes,
        options: {
          // We'll add this later
        }
      },
      {
        resource: SoftwareDesign,
        options: {
          // We'll add this later
        }
      },
      {
        resource: SoftwareMes,
        options: {
          // We'll add this later
        }
      },
      {
        resource: Member,
        options: {
          // We'll add this later
        }
      },
      {
        resource: meeting_model,
        options: {
          // We'll add this later
        }
      },
      {
        resource: budget_model,
        options: {
          // We'll add this later
        }
      },
      {
        resource: update_model,
        options: {
          // We'll add this later
        }
      },
      {
        resource: employee_model,
        options: {
          // We'll add this later
        }
      }
  
    
    ],
      rootPath: '/admin',
})
// const router = AdminBroExpressjs.buildRouter(adminBro)
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const user = await User.findOne({ email })
      if (user) {
        const matched = await bcrypt.compare(password, user.encryptedPassword)
        if (matched) {
          return user
        }
      }
      return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
  })
module.exports= router;
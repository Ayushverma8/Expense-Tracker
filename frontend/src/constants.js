export const routes = {
<<<<<<< HEAD
  home: {
    path: "/",
    isAuthenticated: true,
  },
  viewCoupons: {
    path: "/view-coupons",
    isAuthenticated: true,
  },
  redeemCoupon: {
    path: "/redeem-coupon",
    isAuthenticated: true,
  },
  couponRedeemed: {
    path: "/coupon-redeemed",
    isAuthenticated: true,
  },
  expense: {
    path: "/expense",
    isAuthenticated: true,
  },
  addExpense: {
    path: "/add-expense",
    isAuthenticated: true,
  },
  viewExpense: {
    path: "/view-expense/:id",
    isAuthenticated: true,
  },
  inviteFriends: {
    path: "/invite-friends",
    isAuthenticated: true,
  },
  friendsInvited:{
    path: "/friends-invited",
    isAuthenticated: true,
  },
  successfullInvites: {
    path: "/succInvite",
    isAuthenticated:true,
  },
  editExpense: {
    path: "/edit-expense/:id",
    isAuthenticated: true,
  },
  settleExpense: {
    path: "/settle-expense",
    isAuthenticated: true,
  },
  group: {
    path: "/group",
    isAuthenticated: true,
  },
  createGroup: {
    path: "/create-group",
    isAuthenticated: true,
  },
  viewGroup: {
    path: "/view-group/:id",
    isAuthenticated: true,
  },
  editGroup: {
    path: "/edit-group/:id",
    isAuthenticated: true,
  },
  deleteGroup: {
    path: "/delete-group/:id",
    isAuthenticated: true,
  },
  viewNotification: {
    path: "/view-notification",
    isAuthenticated: true,
  },
  emailNotification: {
    path: "/email-notification",
    isAuthenticated: true,
  },
  notificationSettings: {
    path: "/notification-settings",
    isAuthenticated: true,
  },
  reminders: {
    path: "/reminders",
    isAuthenticated: true,
  },
  createReminder: {
    path: "/create-reminder",
    isAuthenticated: true,
  },
  exportGrid: {
    path: "/export-grid",
    isAuthenticated: true,
  },
  createSnapshot: {
    path: "/create-snapshot",
    isAuthenticated: true,
  },
  viewSnapshot: {
    path: "/view-snapshot",
    isAuthenticated: true,
  },
  addPaymentMethod: {
    path: "/add-method",
    isAuthenticated: true,
  },
  initiatePayment: {
    path: "/initiate-payment",
    isAuthenticated: true,
  },
  paymentStatus: {
    path: "/payment-status",
    isAuthenticated: true,
  },
  paymentHistory: {
    path: "/payment-history",
    isAuthenticated: true,
  },
  notFound: {
    path: "/error",
    isAuthenticated: true,
  },
=======
    home: {
        path: "/",
        isAuthenticated: true,
    },
    group: {
        path: "/group",
        isAuthenticated: true,
    },
    createGroup: {
        path: "/create-group",
        isAuthenticated: true,
    },
    viewGroup: {
        path: "/view-group/:id",
        isAuthenticated: true,
    },
    editGroup: {
        path: "/edit-group/:id",
        isAuthenticated: true,
    },
    deleteGroup: {
        path: "/delete-group/:id",
        isAuthenticated: true,
    },
    reminders: {
        path: "/reminders",
        isAuthenticated: true,
    },
    createReminder: {
        path: "/create-reminder",
        isAuthenticated: true,
    },
    createTag: {
        path: "/create-tag",
        isAuthenticated: true,
    },
    editTag: {
        path: "/edit-tag",
        isAuthenticated: true,
    },
    viewTagDetails: {
        path: "/view-tag-details",
        isAuthenticated: true,
    },
    viewTags: {
        path: "/view-tags",
        isAuthenticated: true,
    },
    addReceipt: {
        path: "/add-new-receipt",
        isAuthenticated: true,
    },
    viewReceiptDetails: {
        path: "/view-receipt-details",
        isAuthenticated: true,
    },
    viewReceipts: {
        path: "/view-receipts",
        isAuthenticated: true,
    },
    viewCoupons: {
        path: "/view-coupons",
        isAuthenticated: true,
    },
    redeemCoupon: {
        path: "/redeem-coupon",
        isAuthenticated: true,
    },
    couponRedeemed: {
        path: "/coupon-redeemed",
        isAuthenticated: true,
    },
    login: {
        path: "/login",
        isAuthenticated: true,
    },
    register: {
        path: "/register",
        isAuthenticated: true,
    },
    forgotPassword: {
        path: "/forgot-password",
        isAuthenticated: true,
    },
    passwordChanged: {
        path: "/password-changed",
        isAuthenticated: true,
    },
    viewNotification: {
        path: "/view-notification",
        isAuthenticated: true,
    },
    emailNotification: {
        path: "/email-notification",
        isAuthenticated: true,
    },
    notificationSettings: {
        path: "/notification-settings",
        isAuthenticated: true,
    },
    exportGrid: {
        path: "/export-grid",
        isAuthenticated: true,
    },
    createSnapshot: {
        path: "/create-snapshot",
        isAuthenticated: true,
    },
    viewSnapshot: {
        path: "/view-snapshots",
        isAuthenticated: true,
    },
    addPaymentMethod: {
        path: "/add-method",
        isAuthenticated: true,
    },
    initiatePayment: {
        path: "/initiate-payment",
        isAuthenticated: true,
    },
    paymentStatus: {
        path: "/payment-status",
        isAuthenticated: true,
    },
    paymentHistory: {
        path: "/payment-history",
        isAuthenticated: true,
    },
    notFound: {
        path: "/error",
        isAuthenticated: true,
    },
    analytics: {
        path: '/analytics',
        isAuthenticated: true
    },
    expenseTracking: {
        path: '/expense-tracking',
        isAuthenticated: true
    },
    spendingTrends: {
        path: '/spending-trends',
        isAuthenticated: true
    },
    expenseAnalysis: {
        path: '/expense-analysis',
        isAuthenticated: true
    }

>>>>>>> 68807f3101383053e6c4fac79ee1fd6b5dc85726
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

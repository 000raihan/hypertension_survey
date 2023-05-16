const { sequelize, SaveListModel} = require("../models");
const { QueryTypes } = require('sequelize');
const fields = [
    {param: 'doctor_name'},
    {param: 'territory_code'},
    {param: 'mobile_number'},
    {param: 'answer'},
];


exports.save = [
    async (req, res, next) => {
        const errorHandler = (err) => {
            req.flash('error', err.original.sqlMessage);
            res.redirect('/error');
        };

        let point = 0;
        // if(req.body.q1 === "yes"){point = point + 20;}
        // if(req.body.q2 === "yes"){point = point + 20;}
        // if(req.body.q3 === "yes"){point = point + 20;}
        // if(req.body.q4 === "yes"){point = point + 20;}
        // if(req.body.q5 === "yes"){point = point + 20;}
        // let message = "";
        // if(point >= 60) {
        //     message = `আমাদের জরিপে আপনার স্কোর এসেছে ${point} । অর্থাৎ, আপনার স্বাস্থ্যগত দিক বিবেচনা করে, আপনি দ্রুত বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন।`;
        //     req.flash('error', message);
        // }else if(point <= 59){
        //     if(point === 0){
        //         message = `আমাদের জরিপে আপনার স্কোর এসেছে ${point} । অর্থাৎ, স্বাস্থ্যগত দিক বিবেচনা করে আপনি পরিপূর্ণরূপে সুস্থ আছেন। কিডনির সুস্থতা নিশ্চিত করতে নিয়মিত শরীরের যত্ন নিন।`;
        //         req.flash('success', message);
        //     }else{
        //         message = `আমাদের জরিপে আপনার স্কোর এসেছে ${point} । অর্থাৎ, আপনার স্বাস্থ্যগত দিক বিবেচনা করে শরীরের যত্ন নেয়া উচিত এবং প্রয়োজনে বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন।`;
        //         req.flash('error', message);
        //     }
        // }
        if(req.body.q1 === "yes"){point = point + 20;}
        if(req.body.q2 === "yes"){point = point + 20;}
        if(req.body.q3 === "yes"){point = point + 20;}
        if(req.body.q4 === "yes"){point = point + 20;}
        // if(req.body.q5 === "yes"){point = point + 20;}
        
        let message = "";

        if(req.body.q5 === "box_1") {
            message = `আপনি মৃদু মাত্রায় হাইপারটেনশনের ঝুঁকিতে আছেন, নিয়মিত রক্তচাপ পরীক্ষা করুন ও চিকিৎসকের পরামর্শ অনুযায়ী জীবনযাপন করুন।`;
            req.flash('error', message);
        }else if(req.body.q5 === "box_2"){
                message = `আপনি মাঝারী মাত্রায় হাইপারটেনশনের ঝুঁকিতে আছেন, নিয়মিত রক্তচাপ পরীক্ষা করুন ও অবশ্যই বিশেষজ্ঞ চিকিৎসকের শরণাপন্ন হোন।`;
                req.flash('success', message);
        }else {
            message = `আপনি উচ্চ মাত্রায় হাইপারটেনশনের ঝুঁকিতে আছেন, দ্রুত বিশেষজ্ঞ চিকিৎসকের শরণাপন্ন হোন এবং সঠিক চিকিৎসা গ্রহণ করুন।`;
            req.flash('error', message);
        }
        const save_date = await SaveListModel.create(req.body).catch(errorHandler);
        res.redirect('/success');

    }];
